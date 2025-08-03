import { FieldError, UseFormRegister } from 'react-hook-form';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';

interface FormFieldProps {
  id: string;
  label: string;
  type: string;
  register: UseFormRegister<any>;
  error?: FieldError;
}

export const FormField = ({ id, label, type, register, error }: FormFieldProps) => {
	return (
		<div>
			<Label htmlFor={id} className={'mb-2 inline-block'}>{label}</Label>
			<Input id={id} type={type} {...register(id)} />
			{error && <p className="text-red-500 text-sm mt-2">{error.message}</p>}
		</div>
	);
};