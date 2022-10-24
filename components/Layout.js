import Left from "./Sidebar/Left";
import Right from "./Sidebar/Right";
export default function Layout({ children }) {
  return (
    <div>
      <div className="bg-DarkGray">
        <div className="min-h-full">
          <div className="grid grid-cols-12 mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:gap-5">
            <Left />
            {children}
            <Right />
          </div>
        </div>
      </div>
    </div>
  );
}
