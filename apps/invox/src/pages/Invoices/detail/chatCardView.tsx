import { MyProfileImage, PageTitle } from "@/components";
import ParrotAvatar from "@shared/assets/icons/parrot.png";
import ThreeDots from "@shared/assets/icons/threedot.svg";

function ActivityCard({
  avatar = ParrotAvatar,
  title,
  meta,
  body,
  showAction = true,
  showAvatar = true,
}: {
  avatar?: string;
  title?: string;
  meta?: any;
  body?: string;
  showAction?: boolean;
  showAvatar?: boolean;
}) {
  return (
    <div className="p-3 box-border bg-[#FAFAFA] rounded shadow-md">
      <div className="flex items-center gap-3">
        {showAvatar && (
          <MyProfileImage
            imageUrl={avatar}
            loaded={true}
            avatarClassName="!rounded-full"
            fileId={"chat_id"}
            className="w-10 h-10 rounded-full object-cover"
          />
        )}

        <div className="flex-1 min-w-0">
          {title && (
            <PageTitle
              className="text-blackDark font-semibold text-base leading-6"
              title={title}
            />
          )}
          {meta && (
            <div className="text-greyForeground text-sm leading-5">{meta}</div>
          )}
        </div>

        {showAction && (
          <img
            src={ThreeDots}
            alt="action"
            className="w-[0.78125rem] h-[0.15625rem] object-cover cursor-pointer"
          />
        )}
      </div>

      {body && (
        <p className="mt-3 text-textChatcolor text-sm leading-5">{body}</p>
      )}
    </div>
  );
}

export default function ActivityListSingleFile() {
  return (
    <div className="py-4 px-6 flex flex-col gap-y-2.5 font-inter">
      {Array.from({ length: 30 }).map((_, idx) => (
        <ActivityCard
          key={idx}
          title="The given client code is inactive"
          meta={
            <>
              <span>12 hours ago</span>
              <span> by </span>
              <span className="font-semibold">Lisa</span>
            </>
          }
          body="The received invoice is not in active client, Need guidance on what should be the next step for it."
        />
      ))}

      <ActivityCard
        title="Moved to Pending list"
        showAction={false}
        showAvatar={false}
      />
    </div>
  );
}
