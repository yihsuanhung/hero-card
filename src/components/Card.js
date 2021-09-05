import defaultImg from "../images/noprofile.png";

export default function Card(props) {
  const { title, subtitle, img, link } = {
    title: "Hero",
    subtitle: "The Super Hero",
    img: defaultImg,
    link: "#",
    ...props,
  };
  return (
    <div className="max-w-xs flex-auto p-auto m-6 bg-white rounded-xl shadow-md overflow-hidden space-x-4">
      <img className="h-auto w-full" src={img} alt="tony image" />
      <div className="p-8">
        <div className="text-3xl">
          <a href={link}>{title}</a>
        </div>
        <div className=" mt-2 text-gray-500">{subtitle}</div>
      </div>
    </div>
  );
}
