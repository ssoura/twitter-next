import React from "react";
import TwitterIcon from "../svg/TwitterIcon";

import {
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  DocumentTextIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
  PencilIcon,
  ChevronDownIcon,
} from "@heroicons/react/20/solid";

function Left() {
  return (
    <div class="hidden col-span-12 md:block xl:col-span-4 md:col-span-3">
      <div class="sticky top-0">
        <div class="h-screen flex flex-col">
          <div
            class="p-2 my-2 rounded-full w-min hover:bg-blue-50
          dark:hover:bg-white/20
          "
          >
            <nuxt-link to="/">
              <div class="w-8 h-8">
                <TwitterIcon />
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Left;
