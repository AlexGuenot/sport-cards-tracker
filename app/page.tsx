import Image from "next/image";

export default function Home() {
  return (
    <div className="flex text-center items-center justify-center h-screen">
      <h1 className="text-3xl font-bold">Sport Cards Tracker</h1>
      <button className="btnbtn-success">Add Card</button>
    </div>
  );
}
