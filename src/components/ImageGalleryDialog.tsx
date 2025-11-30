import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface ImageData {
  url: string;
  title: string;
  description: string;
}

interface ImageGalleryDialogProps {
  selectedImage: ImageData | null;
  setSelectedImage: (image: ImageData | null) => void;
}

const ImageGalleryDialog = ({ selectedImage, setSelectedImage }: ImageGalleryDialogProps) => {
  return (
    <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden">
        {selectedImage && (
          <>
            <DialogHeader className="p-6 pb-0">
              <DialogTitle className="text-2xl font-bold">{selectedImage.title}</DialogTitle>
            </DialogHeader>
            <div className="relative">
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
            </div>
            <div className="p-6 pt-4">
              <p className="text-muted-foreground">{selectedImage.description}</p>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ImageGalleryDialog;
