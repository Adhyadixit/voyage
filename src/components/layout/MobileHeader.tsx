import { cn } from "@/lib/utils";

const MobileHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b py-3 px-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img 
            src="/placeholder.svg" 
            alt="Voyage Vista Logo" 
            className="h-8 w-8"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              if (target.src !== "https://via.placeholder.com/64?text=Logo") {
                target.src = "https://via.placeholder.com/64?text=Logo";
              }
            }}
          />
          <div>
            <h1 className="text-lg font-display font-bold premium-gradient">
              Voyage Vista
            </h1>
            <p className="text-xs text-muted-foreground">
              Explore India
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MobileHeader;
