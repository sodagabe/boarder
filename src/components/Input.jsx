import { camelize } from "../js/utils/string";

function Input({
  label,
  type = "text",
  id = camelize(label),
  placeholder = "",
  required = true,
}) {
  return (
    <div className="flex w-full flex-col">
      <label htmlFor={id} className="pb-2">
        {label}
      </label>
      <input
        className="outline-secondary-300 rounded-sm border border-slate-400 p-3 user-invalid:border-red-500 hover:border-slate-600 focus:outline-3"
        type={type}
        name={id}
        id={id}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
}

const TextInput = ({ label, id = camelize(label), placeholder = "" }) =>
  Input({ label, id, placeholder });
const EmailInput = ({ label, id = camelize(label), placeholder = "" }) =>
  Input({ label, id, placeholder, type: "email" });
const PhoneInput = ({ label, id = camelize(label), placeholder = "" }) =>
  Input({ label, id, placeholder, type: "tel" });

export { TextInput, EmailInput, PhoneInput };
