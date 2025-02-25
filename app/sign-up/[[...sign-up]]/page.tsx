import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <div className="flex flex-col justify-center items-center w-full mt-[4rem]">
      <SignUp />
    </div>
  );
}
