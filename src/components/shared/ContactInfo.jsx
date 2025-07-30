import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const iconMap = {
  email: Mail,
  phone: Phone,
  location: MapPin,
};

const ContactInfo = ({ icon = "email", title, items = [], text = "" }) => {
  const IconComponent = iconMap[icon] || Mail;

  return (
    <div className="text-center border-b border-slate-300 pb-5">
      <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4 ">
        <IconComponent size={28} />
      </div>
      <h4 className="text-xl font-semibold text-slate-800 mb-1">{title}</h4>
      {text && <p className="text-gray-600 text-sm mb-2">{text}</p>}
      <div className="space-y-1 text-base">
        {items.map((href, i) => (
          <div key={i}>
            <Link
              href={href}
              className="text-slate-600 hover:text-blue-800 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {href.replace(/^(mailto:|tel:)/, "")}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
