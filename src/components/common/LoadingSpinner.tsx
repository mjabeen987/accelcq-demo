const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="relative">
        {/* Outer ring */}
        <div className="h-16 w-16 rounded-full border-4 border-secondary-200 animate-pulse"></div>
        
        {/* Spinning ring */}
        <div className="absolute top-0 left-0 h-16 w-16 rounded-full border-4 border-transparent border-t-primary-600 border-r-accent-500 animate-spin"></div>
        
        {/* Inner pulse */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-8 w-8 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;