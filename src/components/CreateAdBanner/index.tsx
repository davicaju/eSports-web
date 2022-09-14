import { MagnifyingGlassPlus } from "phosphor-react";

export function CreateAdBanner() {
  return (
    <div className="pt-1 bg-nlw-gradient self-stretch rounded-lg overflow-hidden mt-8 ">
      <div className=" bg-[#2A2634] px-8 py-6 flex justify-between items-center">
        <div>
          <strong className="text-2xl text-white font-black block">
            Not find your duo?
          </strong>
          <span className="text-zinc-400 block">
            Publish your post for find new players!
          </span>
        </div>

        <button className="py-3 px-4 hover:bg-violet-600 bg-violet-500 text-white rounded flex items-center gap-3">
          <MagnifyingGlassPlus size={24} />
          Publish announcement
        </button>
      </div>
    </div>
  );
}
