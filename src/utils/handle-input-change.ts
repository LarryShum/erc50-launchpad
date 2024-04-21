export const handleInputChange = (
  e: React.ChangeEvent<
    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
  >,
  setFormData: React.Dispatch<React.SetStateAction<any>>
) => {
  const { name, value } = e.target;

  // Remove comma
  const filteredValue = value.replace(/,/g, "");

  setFormData((prevState: any) => ({ ...prevState, [name]: filteredValue }));
};
