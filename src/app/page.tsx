import 'bootstrap/dist/css/bootstrap.css';
//import './globals.css'
import { Inter, REM, WindSong } from 'next/font/google'
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'PreveNet',
  description: 'Distribuidor de Tarefas Preventivas',
}

export function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

export default function Home() {
  return (
    <main>
        <Image
          className='bg-image-wrapper'
          src="/background.jpg"
          alt="Background"
          width={1920}
          height={1080}
          quality={100}
        />
      <div className="card" style={{ width: '24rem', marginRight: 'auto', marginLeft: 'auto', marginTop: '30px', marginBottom: 'auto' }}>
        <div style={{ margin: '20px', imageOrientation:'center'}}>
          <Image src="/logoPrevenet.png" className="img-fluid" alt="..." width={400} height={100} objectPosition='' style={{}}/>
          <div className="card-body">
            <p className="card-text" style={{ textAlign: 'center' }}>Sistema de Distribuição de Preventivas Automatizado</p>
          </div>
          <ul className="list-group list-group-flush">
            <form>
              <fieldset>
                <div className="mb-3">
                  <label htmlFor="selectRegional" className="form-label">Tipo de Preventiva</label>
                  <select id="selectRegional" className="form-select">
                    <option value="1">Preventiva Site</option>
                    <option value="2">Preventiva Rede BackBone</option>
                    <option value="3">Preventiva CTO</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="disabledSelect" className="form-label">Regional</label>
                  <select id="disabledSelect" className="form-select">
                    <option value="1">Regional Central</option>
                    <option value="2">Regional Campinas</option>
                    <option value="3">Regional Centro-Oeste</option>
                    <option value="4">Regional Vale-Sul</option>
                  </select>
                </div>
              </fieldset>
              <fieldset disabled>
                <div className="mb-3">
                  <label htmlFor="disabledSelect" className="form-label">Cidade</label>
                  <select id="disabledSelect" className="form-select">
                    <option value="1"></option>
                  </select>
                </div>
              </fieldset>
              <fieldset disabled>
                <div className="mb-3">
                  <label htmlFor="kmRede" className="form-label">Km</label>
                  <input type="text" className="form-control" id="kmRede" />
                </div>
              </fieldset>
              <fieldset disabled>
                <div className="mb-3">
                  <label htmlFor="disabledSelect" className="form-label">Site</label>
                  <select id="disabledSelect" className="form-select">
                    <option value="1"></option>
                  </select>
                </div>
              </fieldset>
              <fieldset disabled>
                <div className="mb-3">
                  <label htmlFor="disabledSelect" className="form-label">Técnico</label>
                  <select id="disabledSelect" className="form-select">
                    <option value="1"></option>
                  </select>
                </div>
                </fieldset>
                <div className='d-grid gap-2 d-sm-flex justify-content-sm-center'>
                <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
          </ul>
        </div>
      </div>
    </main >
  )
}