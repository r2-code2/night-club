import { CursorFollow, CursorProvider } from "./shadcn-io/animated-cursor";
import Image from "next/image";

export const Cursor = () => {
  return (
    <CursorProvider>
      <CursorFollow>
        <Image
          src="/assets/icon/cursor.svg"
          width={25}
          height={25}
          alt="cursor"
        />
      </CursorFollow>
    </CursorProvider>
  );
};
export default Cursor;
