import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    metadataBase: new URL('https://2026gumiramyun.com'),

    title: '2026 구미라면축제',
    description: '부기와 누디가 라면을 끓이고 있어요. 조금만 기다려주세요.',
    openGraph: {
        title: '2026 구미라면축제',
        description: '2026 구미라면축제 준비중 임시 페이지입니다.',
        url: 'https://2026gumiramyun.com',
        siteName: '구미라면축제',
        locale: 'ko_KR',
        type: 'website',
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ko">
            <body>{children}</body>
        </html>
    );
}
