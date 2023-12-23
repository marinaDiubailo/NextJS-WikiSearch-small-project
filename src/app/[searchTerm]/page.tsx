import { WikiArticle } from '@/entities/WikiArticle';
import getWikiResults from '@/shared/api/getWikiResults';
import { Result, SearchResult } from '@/shared/types/result';
import cls from './page.module.scss';

interface ResultsPageProps {
    params: {
        searchTerm: string;
    };
}

export async function generateMetadata({
    params: { searchTerm },
}: ResultsPageProps) {
    const wikiData: Promise<SearchResult> = getWikiResults(searchTerm);
    const data = await wikiData;
    const displayTerm = searchTerm.replaceAll('%20', ' ');

    if (!data?.query?.pages) {
        return {
            title: `${displayTerm} Not Found`,
        };
    }

    return {
        title: displayTerm,
        description: `Search results for ${displayTerm}`,
    };
}

export default async function ResultsPage(props: ResultsPageProps) {
    const {
        params: { searchTerm },
    } = props;

    const wikiData: Promise<SearchResult> = getWikiResults(searchTerm);
    const data = await wikiData;
    const results: Result[] | undefined = data?.query?.pages;

    const content = (
        <main className={cls.main}>
            {results ? (
                Object.values(results).map((result) => (
                    <WikiArticle key={result.pageid} result={result} />
                ))
            ) : (
                <h2 className={cls['not-found']}>{`${searchTerm.replaceAll(
                    '%20',
                    ' ',
                )} Not Found`}</h2>
            )}
        </main>
    );

    return content;
}
