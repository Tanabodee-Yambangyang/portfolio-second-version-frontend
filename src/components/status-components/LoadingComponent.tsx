export default function LoadingComponent() {
    return (
        <div className="fixed inset-0 flex flex-col gap-4 items-center justify-center bg-white bg-opacity-80 z-50">
            <div className="w-12 h-12 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
            <label className="text-gray-500 text-lg"> Please wait a moment. </label>
        </div>
    );
}