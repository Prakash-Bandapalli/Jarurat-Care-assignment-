import { MdDelete } from "react-icons/md";
import { LuClipboardEdit } from "react-icons/lu";

function DisplayServices({ services, onDelete, onEdit }) {
  return (
    <ul className="w-full p-4">
      {services?.map((service) => {
        return (
          <li
            className="bg-gradient-to-l from-slate-300 to-slate-100 border border-slate-300 rounded-lg shadow-sm hover:-translate-y-0.5 hover:shadow-md duration-200 text-amber-800 
            max-w-6xl mx-auto p-4 relative mb-4 flex flex-col gap-3 md:gap-6"
            key={service.id}
          >
            <h2 className="text-center font-bold text-xl md:text-3xl">
              {service.name}
            </h2>
            <p className="text-center font-semibold text-md md:text-lg">
              {service.description}
            </p>
            <p className="text-black font-bold text-center md:text-3xl">
              ₹{service.price}
            </p>
            <div className="absolute flex text-2xl top-2 right-3 text-black">
              <LuClipboardEdit
                onClick={() => onEdit(service.id)}
                className="hover:text-cyan-500"
              />
              <MdDelete
                onClick={() => onDelete(service.id)}
                className="hover:text-red-700"
              />
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default DisplayServices;
