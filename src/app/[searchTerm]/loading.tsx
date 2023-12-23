import cls from './page.module.scss';

export default function loading() {
    return (
        <main className={cls['loading-container']}>
            <h2 className={cls['loading-text']}>Loading...</h2>
        </main>
    );
}
