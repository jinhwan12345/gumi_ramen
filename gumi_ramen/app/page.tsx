import Image from 'next/image';
import Link from 'next/link';

export default function MaintenancePage() {
    return (
        <main className="relative min-h-screen w-full bg-white flex flex-col items-center justify-center overflow-hidden p-4">
            <h1 className="sr-only">2026 구미라면축제 홈페이지 리뉴얼 중</h1>

            {/* 이미지 비율 유지 컨테이너 */}
            <div className="relative w-full max-w-[1200px] aspect-[1200/400] md:aspect-[3/1]">
                <Image
                    src="/ramen_main.png"
                    alt="부기와 누디가 맛있는 라면을 끓이는 중!"
                    fill
                    priority
                    className="object-contain"
                />

                {/* '2025 구미라면축제 돌아보기' 버튼 영역 투명 링크 */}
                <Link
                    href="https://www.gumiramyun.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute left-[37%] right-[37%] bottom-[22%] top-[60%] rounded-full cursor-pointer transition-all duration-200 hover:bg-black/5"
                    title="2025 구미라면축제 돌아보기 이동"
                />
            </div>
        </main>
    );
}
