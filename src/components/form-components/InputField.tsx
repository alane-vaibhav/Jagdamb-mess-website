export interface InputFiledProps {
  type: string;
  value: string;
  onChange: () => void;
  placeHolder: string;
  name: string;
  onBlur: () => void;
}

const InputField = (props: InputFiledProps) => {
  return (
    <div>
      <input
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeHolder}
        name={props.name}
        className="w-1/3 p-2 border-b-gray-900 border-2"
        onBlur={props.onBlur}
      />
    </div>
  );
};

export default InputField;
