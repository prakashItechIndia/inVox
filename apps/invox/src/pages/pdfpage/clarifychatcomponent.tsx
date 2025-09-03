import ParrotAvatar from "@shared/assets/icons/parrot.png";
import ThreeDots from "@shared/assets/icons/threedot.svg";
export default function ActivityListSingleFile() {
  return (
    <div className="py-4 px-6 flex flex-col gap-y-2.5 font-inter">
      {/* Variant 1 */}
          {Array(3).fill("").map(() => {
          return (
            <div
              className="p-3
      
        box-border
        bg-[#FAFAFA]
        rounded
        shadow-[0_2px_4px_rgba(0,0,0,0.14),_0_0_2px_rgba(0,0,0,0.12)]

      
      "
            >
              {/* Top row: avatar | text block | tiny action image */}
              <div className="flex items-center gap-3">
                {/* 32px x 32px, circular */}
                <img
                  src={ParrotAvatar}
                  alt="Avatar"
                  className="w-8 h-8 rounded-full object-cover"
                />

                {/* Title + meta */}
                <div className="flex-1 min-w-0">
                  {/* Title: Font-size/300 + Line-height/300 (assumed 16/24) */}
                  <div className="text-blackDark font-semibold tracking-normal text-[1rem] leading-[1.5rem] align-middle">
                    The given client code is inactive
                  </div>

                  {/* Meta: "12 hours ago by Lisa" */}
                  <div className="text-greyForeground tracking-normal text-[0.875rem] leading-[1.25rem]">
                    <span className="align-middle font-normal">
                      12 hours ago
                    </span>
                    <span className="align-middle font-normal"> by </span>
                    <span className="align-middle font-semibold">Lisa</span>
                  </div>
                </div>

                {/* Tiny action image: 12.5px x 2.5px */}
                <img
                  src={ThreeDots}
                  alt="action"
                  className="w-[0.78125rem] h-[0.15625rem] object-cover cursor-pointer"
                />
              </div>

              {/* Body text (second child in variant 1) */}
              <p className="mt-3 text-textChatcolor font-normal tracking-normal text-[0.875rem] leading-[1.25rem] align-middle">
                The received invoice is not in active client, Need guidance on
                what should be the next step for it.
              </p>
            </div>
          );
      })}

      {/* Variant 2 */}
      <div
        className="p-3         box-border
        bg-[#FAFAFA]
        rounded
        shadow-[0_2px_4px_rgba(0,0,0,0.14),_0_0_2px_rgba(0,0,0,0.12)]"
      >
        <p className="text-textChatcolor font-normal tracking-normal text-[0.875rem] leading-[1.25rem] align-middle">
          Moved to Pending list
        </p>
      </div>
    </div>
  );
}
