export interface DropdownMenuProps {
  label: string;
  options: string[];
  value?: string;
  onChange: (value: string) => void;
}
export interface PageHeaderProps{
    title:string; 
    description:string
}
export interface MainHomeHeaderProps {
  title: string;
  description: string;
  url: string;
} 