import Image from "next/image";
import loadingGif from "@/public/loading.gif"

function Loading() {
    return (
        <div className="h-screen flex justify-center items-center">
            <Image unoptimized src={loadingGif} alt="loading gif" />
        </div>
    );
}

export default Loading;