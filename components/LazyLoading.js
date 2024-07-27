import Image from "next/image";

const LazyLoading = () => {
  
    return (
        <Image
            src="/placeholderAd.gif"
            alt="Lazy loaded Image"
            width={2000}
            height={500}
            loading="lazy"
          />
    );
  };
  
  export default LazyLoading;