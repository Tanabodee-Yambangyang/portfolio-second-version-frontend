import { FaceFrownIcon } from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button";

export default function ErrorComponent() {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-80 z-50">
            <div className="flex flex-col items-center">
                <FaceFrownIcon className="text-black w-10" />
                <label className="text-2xl flex items-center gap-2"> <b> Something went wrong! </b> </label>
                <label className="text-base"> Please try again later. </label>
                <Button className="cursor-pointer w-30 mt-8" onClick={() => window.location.reload()}>
                    Reload
                </Button>
            </div>
        </div>
    )
};