import { useState } from "react";
import { TbCoinTaka } from "react-icons/tb";
import useAuth from "./../../../hooks/useAuth";

const ConfirmBookingModal = ({ service, worker, onConfirm, onClose }) => {
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const { user } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();

    const bookingData = {
      resident: {
        address,
        phone,
        email: user?.email,
        photo: user?.photoURL,
        name: user?.displayName,
      },
      service: {
        ...service,
      },
      bookingDate: new Date(),
      status: true,
    };

    // Call the onConfirm function with bookingData
    onConfirm(bookingData);
  };

  return (
    <div className="fixed inset-0  flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl max-w-lg w-full">
        <h3 className="font-bold text-lg mb-4 text-center z-50">
          Booking Confirmation!
        </h3>
        <div className="avatar mb-4 flex justify-center">
          <div className="w-12 rounded">
            <img src={worker?.image} alt="worker" />
          </div>
        </div>
        <div className="flex justify-center items-center gap-2 mb-4">
          <TbCoinTaka />
          <p>
            Rate: <span className="badge bg-sky-200">500 </span> BDT/Hour
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col justify-center items-center">
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Address"
              className="input input-bordered input-sm w-full max-w-xs"
              required
            />
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone No."
              className="input input-bordered input-sm w-full max-w-xs my-4"
              required
            />
          </div>
          <div className="flex justify-evenly items-center">
            <button
              type="button"
              className="btn btn-sm bg-gray-300"
              onClick={onClose}
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-sm bg-sky-300">
              Confirm Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ConfirmBookingModal;
