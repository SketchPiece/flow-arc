import type { ComponentProps } from 'react'
import { cn } from '../../lib/utils'

type ButtonProps = ComponentProps<'button'>

export default function Button({ className, ...props }: ButtonProps) {
	return (
		<button
			className={cn(
				'bg-primary-obsidian text-white rounded-xl py-5 px-9 text-lg',
				className
			)}
			{...props}
		/>
	)
}
