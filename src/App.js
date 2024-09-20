import React, { useState } from "react";
import DisplayServices from "./DisplayServices";
import { CgCloseO } from "react-icons/cg";
import { toast, Toaster } from "react-hot-toast";

function ServiceManager() {
  const [services, setServices] = useState([
    {
      id: 1,
      name: "General Checkup",
      description: "Routine health checkup",
      price: "50",
    },
    {
      id: 2,
      name: "Blood Test",
      description: "Complete blood count",
      price: "30",
    },
    {
      id: 3,
      name: "X-Ray",
      description: "Radiographic examination",
      price: 100,
    },
    {
      id: 4,
      name: "MRI Scan",
      description: "Magnetic resonance imaging",
      price: 500,
    },
    {
      id: 5,
      name: "Vaccination",
      description: "Immunization against diseases",
      price: 20,
    },
  ]);

  const [formVisible, setFormVisible] = useState(false);
  const [editingService, setEditingService] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
  });

  const handleAddClick = () => {
    setFormVisible(true);
    setEditingService(null);
    setFormData({ name: "", description: "", price: "" });
  };

  const handleEditClick = (id) => {
    const serviceToEdit = services.find((service) => service.id === id);
    setEditingService(serviceToEdit);
    setFormData(serviceToEdit);
    setFormVisible(true);
  };

  const handleDelete = (id) => {
    setServices(services.filter((service) => service.id !== id));
    toast.success("Deleted");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.description || !formData.price) {
      toast.error("All fields are required!");
      return;
    }

    const priceValue = parseFloat(formData.price);

    if (isNaN(priceValue) || priceValue <= 0) {
      toast.error("Price must be a number and should be greater than zero!");
      return;
    }

    if (editingService) {
      setServices(
        services.map((service) =>
          service.id === editingService.id ? formData : service
        )
      );
      toast.success("Successfully edited");
    } else {
      setServices([...services, { id: Date.now(), ...formData }]);
      toast.success("Successfully added");
    }
    setFormVisible(false);
  };

  return (
    <div className="container mx-auto mt-8 p-4 relative">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-center text-4xl font-bold mb-6 text-blue-600">
          HealthCare Services Manager
        </h1>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={handleAddClick}
        >
          Add New Service
        </button>
      </div>

      <div className={`${formVisible ? "blur-sm pointer-events-none" : ""}`}>
        <DisplayServices
          services={services}
          onDelete={handleDelete}
          onEdit={handleEditClick}
        />
      </div>

      {formVisible && (
        <div className="absolute inset-0 z-10 flex justify-center items-center">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-lg shadow-lg w-1/2 mx-auto relative z-20 flex flex-col items-center"
          >
            <input
              type="text"
              placeholder="Service Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="border border-slate-200 rounded-md px-3 py-2 mb-4 w-full"
            />
            <input
              type="text"
              placeholder="Service Description"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              className="border border-slate-200 rounded-md px-3 py-2 mb-4 w-full"
            />
            <input
              type="text"
              placeholder="Service Price"
              value={formData.price}
              onChange={(e) =>
                setFormData({ ...formData, price: e.target.value })
              }
              className="border border-slate-200 rounded-md px-3 py-2 mb-4 w-full"
            />

            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              {editingService ? "Update Service" : "Add Service"}
            </button>
            <div className="absolute right-2 top-1.5 text-lg cursor-pointer">
              <CgCloseO onClick={() => setFormVisible(false)} />
            </div>
          </form>
        </div>
      )}
      <Toaster />
    </div>
  );
}

export default ServiceManager;
