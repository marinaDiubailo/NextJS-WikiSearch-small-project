'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './SearchForm.module.scss';

interface SearchFormProps {
    className?: string;
}

export const SearchForm = (props: SearchFormProps): JSX.Element => {
    const { className } = props;
    const [search, setSearch] = useState('');
    const router = useRouter();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSearch('');
        router.push(`/${search}/`);
    };

    return (
        <form
            className={classNames(cls['search-form'], {}, [className])}
            onSubmit={handleSubmit}
        >
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className={cls.input}
                placeholder="Search"
            />
            <button className={cls.button}>🚀</button>
        </form>
    );
};
