import Link from 'next/link';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Result } from '@/shared/types/result';
import cls from './WikiArticle.module.scss';

interface WikiArticleProps {
    className?: string;
    result: Result;
}

export function WikiArticle(props: WikiArticleProps): JSX.Element {
    const { className, result } = props;

    const itemTextCol = (
        <div className={cls.text}>
            <h2>
                <Link
                    href={`https://en.wikipedia.org/?curid=${result.pageid}`}
                    target="_blank"
                    className={cls.link}
                >
                    {result.title}
                </Link>
            </h2>
            <p>{result.extract}</p>
        </div>
    );

    const content = result?.thumbnail?.source ? (
        <article className={classNames(cls.article, {}, [className])}>
            <div className={cls['article-container']}>
                <div className={cls['img-container']}>
                    <img
                        src={result.thumbnail.source}
                        alt={result.title}
                        width={result.thumbnail.width}
                        height={result.thumbnail.height}
                        loading="lazy"
                    />
                </div>
                {itemTextCol}
            </div>
        </article>
    ) : (
        <article className={cls['article-item']}>{itemTextCol}</article>
    );

    return content;
}
