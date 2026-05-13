import { useState, useRef } from "react";
import { Loader2, Upload, X, CheckCircle2 } from "lucide-react";

interface ImageUploadProps {
  label: string;
  value: string;
  onChange: (url: string) => void;
  folder?: string;
}

export function ImageUpload({ label, value, onChange }: ImageUploadProps) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [dragging, setDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragging(true);
    } else if (e.type === "dragleave") {
      setDragging(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleFile = async (file: File) => {
    if (!file.type.startsWith("image/")) {
      setError("Please upload an image file.");
      return;
    }

    setUploading(true);
    setError(null);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "Portfolio");

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/dujb86o8g/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Upload failed.");
      }

      const data = await response.json();
      onChange(data.secure_url);
      setUploading(false);
    } catch (err) {
      console.error("Upload error:", err instanceof Error ? err.message : String(err));
      setError("Upload failed. Please check your network.");
      setUploading(false);
    }
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
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          disabled={uploading}
          className={`
            w-full aspect-video rounded-2xl border-2 border-dashed flex flex-col items-center justify-center gap-3 transition-all
            ${uploading 
              ? "border-black/5 bg-black/5 cursor-wait" 
              : dragging
              ? "border-[#25A9B3] bg-[#25A9B3]/5"
              : "border-black/10 hover:border-[#25A9B3]/40 hover:bg-[#25A9B3]/5 group cursor-pointer"
            }
          `}
        >
          {uploading ? (
            <>
              <Loader2 className="animate-spin text-[#25A9B3]" />
              <div className="text-center">
                <div className="text-[10px] font-black text-black/40 uppercase tracking-widest">Uploading...</div>
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
        onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
        className="hidden"
        accept="image/*"
      />
    </div>
  );
}
