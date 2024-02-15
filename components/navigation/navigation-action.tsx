"use client";

import { Plus } from "lucide-react";
import { Actiontooltip } from "../action-tooltip";
import { useModal } from "@/hooks/use-modal-store";

export const NavigationAction = () => {
  const { onOpen } = useModal();

  return (
    <Actiontooltip label="Add a server" side="right" align="center">
      <button
        className="group flex items-center"
        onClick={() => onOpen("createServer")}
      >
        <div className="flex mx-3 bg-white h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] transition-all overflow-hidden items-center justify-center dark:bg-neutral-700 group-hover:bg-emerald-500">
          <Plus
            className="group-hover:text-white transition text-emerald-500"
            size={25}
          />
        </div>
      </button>
    </Actiontooltip>
  );
};
