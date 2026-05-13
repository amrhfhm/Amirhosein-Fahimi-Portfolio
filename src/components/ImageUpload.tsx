import { useState, useRef } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../lib/firebase";
import { Loader2, Upload, X, CheckCircle2 } from "lucide-react";

interface ImageUploadProps {
  label: string;
  value: string;
  onChange: (url: string) => void;
  folder?: string;
}

export function ImageUpload({ label, value, onChange, folder = "projects" }: ImageUploadProps) {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate if it's an image
    if (!file.type.startsWith("image/")) {
      setError("Please upload an image file.");
      return;
    }

    setUploading(true);
    setError(null);
    setProgress(0);

    const fileName = `${Date.now()}_${file.name.replace(/\s+/g, '_')}`;
    console.log("Starting upload...", { folder, fileName, fileType: file.type, fileSize: file.size });
    const storageRef = ref(storage, `${folder}/${fileName}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const p = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload progress:", p);
        setProgress(p);
      },
      (err) => {
        console.error("Upload error details:", err);
        setError("Upload failed.");
        setUploading(false);
      },
      async () => {
        console.log("Upload completed, getting download URL...");
        try {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          console.log("Download URL:", downloadURL);
          onChange(downloadURL);
          setUploading(false);
          setProgress(0);
        } catch (err) {
          console.error("Download URL error:", err);
          setError("Failed to get download URL.");
          setUploading(false);
        }
      }
    );
  };

  const removeImage = () => {
    onChange("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="space-y-2">
      <label className="text-[10px] font-black text-black/40 uppercase tracking-widest block">
        {label}
      </label>

      {value ? (
        <div className="relative group aspect-video rounded-2xl overflow-hidden border border-black/5 bg-black/5">
          <img 
            src={value} 
            alt="Upload preview" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
            <button
              onClick={() => fileInputRef.current?.click()}
              className="p-2 bg-white/20 hover:bg-white/40 rounded-full text-white backdrop-blur-md transition-colors"
              title="Replace image"
            >
              <Upload size={16} />
            </button>
            <button
              onClick={removeImage}
              className="p-2 bg-red-500/80 hover:bg-red-500 rounded-full text-white backdrop-blur-md transition-colors"
              title="Remove image"
            >
              <X size={16} />
            </button>
          </div>
          <div className="absolute top-2 right-2 p-1 bg-emerald-500 rounded-full text-white shadow-lg">
            <CheckCircle2 size={12} />
          </div>
        </div>
      ) : (
        <button
          onClick={() => fileInputRef.current?.click()}
          disabled={uploading}
          className={`
            w-full aspect-video rounded-2xl border-2 border-dashed flex flex-col items-center justify-center gap-3 transition-all
            ${uploading 
              ? "border-black/5 bg-black/5 cursor-wait" 
              : "border-black/10 hover:border-[#25A9B3]/40 hover:bg-[#25A9B3]/5 group cursor-pointer"
            }
          `}
        >
          {uploading ? (
            <>
              <Loader2 className="animate-spin text-[#25A9B3]" />
              <div className="text-center">
                <div className="text-[10px] font-black text-black/40 uppercase tracking-widest">Uploading...</div>
                <div className="text-xs font-bold text-[#25A9B3] mt-1">{Math.round(progress)}%</div>
              </div>
            </>
          ) : (
            <>
              <div className="p-3 rounded-full bg-black/5 group-hover:bg-[#25A9B3]/10 transition-colors">
                <Upload size={20} className="text-black/30 group-hover:text-[#25A9B3] transition-colors" />
              </div>
              <div className="text-center px-4">
                <div className="text-[10px] font-black text-black/60 uppercase tracking-widest group-hover:text-[#25A9B3] transition-colors">Click to Upload</div>
                <div className="text-[9px] text-black/30 uppercase tracking-wider mt-1">PNG, JPG up to 10MB</div>
              </div>
            </>
          )}
        </button>
      )}

      {error && (
        <p className="text-[10px] font-bold text-red-500 uppercase tracking-wider mt-1">{error}</p>
      )}

      <input
        type="file"
        ref={fileInputRef}
        onChange={handleUpload}
        className="hidden"
        accept="image/*"
      />
    </div>
  );
}
