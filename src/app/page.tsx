import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <NavBar />
      <div className="mt-170 w-full h-full max-w-[1250px] px-14">
        TBA
      </div>
    </div>
  );
}
