import Link from 'next/link';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { SearchForm } from '@/features/SearchForm';

interface NavbarProps {
    className?: string;
}

export const Navbar = (props: NavbarProps): JSX.Element => {
    const { className } = props;

    return (
        <nav className={classNames(cls.navbar, {}, [className])}>
            <h1 className={cls.home}>
                <Link href="/"> WikiRoket!</Link>
            </h1>
            <SearchForm />
        </nav>
    );
};
