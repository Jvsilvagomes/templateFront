import './globals.css';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import Header from '@/components/Header';
import { Toaster } from 'react-hot-toast';

export const metadata = {
    title: 'FrontEnd - Codeverse',
    description: 'Template do Codeverse',
};

export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR">
            <body>
                <Header />
                <AntdRegistry>{children}</AntdRegistry>
                <Toaster />
            </body>
        </html>
    );
}
