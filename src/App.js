import capImg from "./images/captain.jpg";
import tonyImg from "./images/tony.jpg";
import Card from "./components/Card";

function App() {
  return (
    <>
      <div className="flex">
        <Card title="Tony Stark" subtitle="The Iron Man" img={tonyImg} />
        <Card
          title="Steve Rogers"
          subtitle="The Captain American"
          img={capImg}
        />

        {/* <div className="max-w-xs flex-auto p-auto m-6 bg-white rounded-xl shadow-md overflow-hidden space-x-4">
          <img className="h-auto w-full" src={tonyImg} alt="tony image" />
          <div className="p-8">
            <div className="text-3xl">
              <a href="#">Tony</a>
            </div>
            <div className=" mt-2 text-gray-500">The Iron Man</div>
          </div>
        </div>

        <div className="max-w-xs flex-auto p-auto m-6 bg-white rounded-xl shadow-md overflow-hidden space-x-4">
          <img className="h-auto w-full" src={capImg} alt="steve image" />{" "}
          <div className="p-8">
            <div className="text-3xl">
              <a href="#">Steve</a>
            </div>
            <div className=" mt-2 text-gray-500">The Captain American</div>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default App;
