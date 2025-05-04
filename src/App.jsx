import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiTwitter, FiExternalLink } from 'react-icons/fi';
import { GiRevolver, GiBulletBill, GiTomato, GiMoneyStack, GiPistolGun, GiAmmoBox, GiCrosshair, GiTargetPrize } from 'react-icons/gi';
import { FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiExpress, SiGit } from 'react-icons/si';
import './App.css';

function App() {
  const [showBulletHole, setShowBulletHole] = useState(false);
  const [bulletHolePosition, setBulletHolePosition] = useState({ x: 0, y: 0 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Bullet hole effect
  useEffect(() => {
    const handleClick = (e) => {
      setBulletHolePosition({ x: e.clientX, y: e.clientY });
      setShowBulletHole(true);
      setTimeout(() => setShowBulletHole(false), 1000);
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  // Scroll spy for active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    { name: 'HTML5', level: 95, icon: <FaHtml5 /> },
    { name: 'CSS3', level: 90, icon: <FaCss3Alt /> },
    { name: 'JavaScript', level: 90, icon: <FaJs /> },
    { name: 'React', level: 85, icon: <FaReact /> },
    { name: 'Node.js', level: 80, icon: <FaNodeJs /> },
    { name: 'TypeScript', level: 75, icon: <SiTypescript /> },
    { name: 'Express', level: 75, icon: <SiExpress /> },
    { name: 'MongoDB', level: 70, icon: <SiMongodb /> },
    { name: 'Git', level: 85, icon: <SiGit /> },
    { name: 'Responsive Design', level: 90, icon: <GiCrosshair /> },
    { name: 'UI/UX', level: 80, icon: <GiTargetPrize /> },
    { name: 'Performance Opt.', level: 75, icon: <GiPistolGun /> }
  ];

  const projects = [
    {
      title: 'scientific calculator',
      description: 'Say goodbye to boring math—Sci Cal is your quirky React-powered sidekick for crunching numbers, solving equations, and geeking out with style!',
      tags: ['React'],
      link: 'https://bubog-fernandez-scical.netlify.app/',
      image: 'https://t4.ftcdn.net/jpg/00/00/81/19/240_F_811933_s0BZwPIt0ovWy5OHsrpm1i5qD6q5B9.jpg'
    },
    {
      title: 'Pokemon',
      description: 'In this game, you’ll explore vibrant regions, catch unique Pokémon, train them, and battle other trainers to become the Pokémon Champion. Discover wild creatures, build your team, and challenge powerful Gym Leaders on your journey to the top!',
      tags: ['React', 'Firebase', 'Material UI', 'Context API'],
      link: 'https://pokedex-two-topaz.vercel.app/?page=1',
      image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQA8gMBEQACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAEBQEDBgIAB//EAD0QAAEDAwMCBAQDBgQGAwAAAAECAwQABRESITEGQRMiUWEUMnGBI5GhBxVCUrHRM2LB8BYkQ5Lh8SWCk//EABsBAAIDAQEBAAAAAAAAAAAAAAADAQIEBQYH/8QANBEAAgICAQMCBAUEAgEFAAAAAAECAwQREgUhMRNBIlFhkQYUMnGBFSOhwVKx0TM0QmLh/9oADAMBAAIRAxEAPwD4nTgJoAtjjerwQDFgcVsgiBpEHmFbIFWbnpbSHEau1VvfbQH0eFObQE+b9a5biWGbVyR/NVeAFxuKMbKqFWSZLqe7ladCFfWuljU67lWYd9ZdcJJrox7IEXxUcVbZdMeQm9xVZPsNizS2caXQa5+Q9oen7GvYWnwh9K48o9zNOL5FuR6iqCymUsBk1eHdjK18RlLgCVKJrq0vsbZSM5ORzXRg+wiTEMlOM/WrCZMmBLUy7kEjeqTjtCmfQrBeEuMhKlbiuTkU6YJj395Ix81ZPTJBnrkj+ap4AIL1IQ9HdGrO1Nr7Mqz5Ff0jWrHrXUT2ipkJqfMqsd6LoWKGDWEkioAigD1AHqAJoAJYTsKdWiA9kcVrgAyjnitUCGaWzyw0Qomq2LYGhj3fjc0n0yRixdSf4v1qPSAM/eR0FQVtj1qVUDfzEcorkEqCVK37DNbIJRRAKmMc7pOfTvTSQ6NG3G1DZKHcNjcAClWT0WizRQob6QF+EpKfVW39a51t0H22N5peRw0VJGhQOrjFY3p9yz0+4uvV0WyUQYfmmvDsf8NPr7f6VHwVVO+56gv8maU9y4xKba8tiX+63ny+VJ1trzkg9wr0pOLmRzavXhW4rfutJ/VDE+Ej0toO+XPmHB/0rpVy49x8pCWXBkqJxHeO3IaV/atkMipLvJfdCpMz86KtC1JcbUlQ5ChgitUZKS2mLYsWwpJyMije+xRh9ulqjrxqOKRbFNAhuq6nTnJ/OsnpgBv3cjO5qPTAWSrvqChqO9HDRDMbd3gtxWK0RfYgzUrcnNItJQtd2NYJIsVVUD1AHqAPUASORUgGsDitEEQGtVpiAY0cVoiQHsSCnYVbWwGEeUrPNTxA0Fta1xlTZkpuFBQcKfcGdSvRCeVH6UmyxRfGPdg2ktsdQX5coD9zWpMdg8TLkcrI9QjtXEz+uYWI3G2zlL/jH/yWrqus/StL6jRq3XleC51E8lXZLTSUpFcGf4wrT+DGWvrJj1gzfmzv+xXMTdLe0XJ5au0MbuZbCHUD1BFdTpv4ixMyxV8XXN+O+0xVmPZStp7QRDiRlvsracU7EdaLzawcFSQM4+udq9HK+ag9/qXYopLWwayXmXd1+DDdi2vVw2lHiOkeyjXN6tlPp9PrTqdn86iv9iq5u565aOLjbpbl8Rb0SpDxcaStxxxedsnOfbas+F1+uXTJZl0YpptJL/BM6JepwTHrdxesX/LXJa1xMEMS9OpTZxsFDvSunZ9PVo8q1xs9478/XY2SdK0/AjtsG+SEuPpe0qe+Z9w+GXBnY43Ip3Ues9HoaqyPjkvaK3r996Quuqetw7DcXRyxxXGpNrQ0QlRbfjqKkuLxsF5wdzVsXMxepvePZtr2ktNL6ez/AIJkp1d5I4s0q9XeIZJuCGPOUgCOkg4FZer9YxumXRq9Ll288tE1RnZHfIqtkKVcETPi58zxWXlNpUh4pCsb5x9az5/4iePOmNEI6mk3tb9/mFdG982+wKT8dbbW68tRdLZZcUrclSVY5r1FU+Lnrx5Ct7iAGUl28TrZHssd8RllCfxtDiwMebVnnJ4pNuTCipXX2OKf02v8C1OUpuMUVSU21taUzWJ9qWo4C3Ql1ofUjerY+fXk/wDt7I2fs9P/ACi8pOH64tA6oYkjFtuUGWcZ0pd8Nf8A2qp7m1+uLX8EKyDekxHdW5kBwNzGHGVkZSF43+hGxq8XCX6XsuJJEtQPJqHFECuU9rJO9VfYBY/vmkz7okXSBWKaJKaWBFAHqAPUAdN7kVKAOZGwrVAgMbrRFAEIpyIL2zg0xAHx1YIq4D2S2br04Et5My1anW0D/qsq3WMeo/pWOaddvNe4u1bj2H3TXVLDrMGJLK/HcUGUuAeUj+Ek/pXi+tfhu3lZkUtKHnXua8bNjxUJ+TTXSRIj2yS7FIS80nVunOMEZ27nGa8x0umi7MhXkLcW/no2ZDmq24eSu03B5xU6PcH2X22GkOpkNp0hSVAnBHrsK7vWekUY1lUsSLXJ61vf22Y8a+bUlYxb05cXBa2kxoBeUw67h513wmkBatkg8qOOwFewy8mnG1G2fdpdkuT7f9GSvlJPSKIUJ6y9Rx5clluPCWsJQG3CtDWUkckZ3Nc7M6li9V6fbTjSbnrw1p9iYUSosUpLsbl5UaL401wBJCPOvGTgdhj+lfOaY338cZeN+PY6ctL4jJ/GqvV3tr8h1r4Rx9SERQrzJ0gkFY7EkV9E/py6P0yxVLdmu8v3+T+hzfUdti34+Q2uKFy5kmOpLyQEpKHslLbLeMqVtyrO2K5HSMrGxcBT7OyXbXlt+29+EXvrnOzT8fMR9QybjOg64jDzdvaIShTgOpz/ADkc11+i1dPw73zsj68/l4j/APVP5lLnZOO0vhRo+ktCLAwW1atepagN8Enj+leS/FM5z6nYpLXyNeLFemhi0hEdDgBA1LU4o/Xc/wBK4rusvcF8uy+5o4qO2zH2+bLVE0MLYYYVKWmNIW14jjxUc6UJ47c19ReZGmMYcXKyMU5Lekv3en9jkvkm3vSb7A020yLPdW7zJeMtDbodkYGlSffA/wB7Vgr69V1SieEocJPw97T0NeI6ZKzexl1ykP2BT7Y1FpSXE47j/wBV5/8AC9v5Xqfp29l32a8xc8faA7rBhW/pRCpEVp19thISop3LiuP1Na8POzMrrDhXNqKfj20is64Qx+6Mv1ISyIVt1avgIwQtROcuKwpf64r6BV7yfuZYrSMpLO5q7JFzppUgBHaRIkCfFZZkg1JAigD1AE0AWNDJFWiAa0K1QRAU3WiIBCaaiC5s71dMAtpWN6s2A4s8xcV9t9o4Wg5Ge47g+xqjXJaZJZf40VmLHnW+OmMlLmh5KFFXJylWfrS3HW4y7pmedaj3itH0GzThdbS0+rdS0FDo/wAw2NfKeq4ksHNlFez2js48/VqTMrerlHjIVYrY2tlgrCX3VHzPHb9K9x0vDnfrqOXLlLT4peF2/wCzlXSjB+lBaWzUXa2yRDgJtCUD4NQWhtXCjjnH++a8v03quP8AmrpZ+2rFra/n7Gy/FlKuKq8oruqpn/DNyfvQaDzqQlplrcI5x/8AYk/pTcP8lLqMIdNT4rbcpe//AOES9VVN3/4Crt1Cuxi3oltJeQ4yPF82FJUAOM7Gl4nQodVtvnVPi0+3yIsyHRGO0cOsWy/M/E2d1tqcghSVacLQR6j/AN0yq7qPRZunPi5Uvs15WvoyWqcmO4dpF6uo5UBoC82t1Cz5Q6yQULP3q1f4Zw8+fLAyVp9+Mk9r7Cp5dlPayH2EnUXVU59lthqKqI1KSsJUoEqUAN/TAru9L/CuHh2KyyfqSX00vsIsy7JrUVpDS6uMWjpPFrcQnJbwpKtyrIJJP2rz+HG3qXWN5ael800vka5uNVHwgs3qBy6xJ7MMqSBbtZTjfWVDUB9AcVth0FdPurst8ub+2in5j1YtL5IMkW1m7WW3JhP+AGmkqaWjgHH965lfVremdRudsOXLs0/ca8aGRTFJ60UXRtcKxSI8mUuXcp+GGirbxDjASB7ZO9asPJXUcyNlNSrrr+J6/wBspKv8vHTlybDGm0vxZFse8yY3hsK/7ATXFzLOFv5uvzKTNdK+HgxR1RJS7crfDUQUNZlOj6fKK9J+E8Zy9TJn5fj/AGZsuW2oIxVyeU6+48s5U4oqJ9ya9xHt2ECOUck1LIF7nNKkAK5SJEgbwzWaYAhG9IJIo2B6gCaALWavAA1qtUCAlFPiBemmogtSaugLdeMUSANhvYPNVTAeIUiXCeiunCX2yg+3ofsamS5LQPui/wDZzc3G5TtskHC1EgZP/VT/AHH9K8l+KML1sZXx8w7P9hmJZwnwZ11hCWu8amCEuON+KgHhShsQftWr8L5DuwXD/i9FM2v+7tBts63kxmERZlvdddbGAfMlW3rgEH61nz/wpj5NzsrscG/bW/sWqy7a46cSi9XyfLmwVymA2yFeKiO3k40kHzepNdTA6Hi4FMo1vcpJ/E1/oz3X2TknJdhuq4fv+7sOO25aIrbakqDwyFavqBVOjdGfTa5p2cm/kmtDLLXc128AVz6eEdZk2h/4ZSdw0tR0D6Ebp/pXY18PCXdP5ipVLe49i5q9XKS5Bg3RtQcZeStKlJzqA/zDYj3rHi9JwsW2VtEeLft7fwInZZLUJDC+Q4tycackaytsFKFJcIIB3P8AQVtUeH6ew5RUl3FyulWlw3HGXZGl1CkJ1KSQF45OBk0O6UpOLeyfRgKLdIn9O3J1ybDW+EoLeUJV4biSBkggHvWPqOGs+j0Zy4vynrYVylTPklsti31YkKasb64bTmVLZWoLSk9yBjas66PRfBLNUbJL3Saf8llbJS/t/CcWPqRmPeXpt6dcfWkKabVkFScHYgHGNs8Vn6p0l3Yax8LjWvdd1stCxV28p7ZqulZybobu+k4LkwKQVbZToGP0FeU/EGG8aFNPlpe3jZtxbOcpSMpPnfEXG4ys/wCIvwkeyE7V7jpGL+Vwa69fX7mSUudjkIJroKzvvW/3JFrysmhsgDXzS2AM5SpEgrvFZ5gBr5NZ2Sc1UD1SB6gAhmmRALarTAgJRTogXJpqILRV0BypW9VkwL2HMd6gBtEkAEZOwq6ArUmTHuyZkTY4ClKyNlDgiq20Rti1LTjLs0Ukpb2vI2bXMnSUyZ76llPHoM/79KXj4uNix40RSX0JanJ7k9jgPo7AYp3Jlglh9BKlHIOOxxUpgWpnMIOUrTqxn5s7UtW177SLuqz5Hn5Z8Pk703SFDlNnEmyxp1vdUp4tBTjGdlHvj39q89Hr9VeVLHu7fUu6JOPJGbdmKUsIO2+CMYI3xXeck1yXcVFextummLdcLcoR3n1PxHwX87JU5oxwe2D271xZWPnsvKGkJpducW9N8HKzEI1JGdSgfpXWVySW+2yN9xPOjrhBpyQzpLyCpKV7KABxvTI2KX6WSn3Ec3wX21oCUhZGBtmrqXswFMGddbQnwob4DahpVvp/8Gst2Dj5DXqRUtfw1/5KpTj2izpcjDGDz61qm46Sj7ExWloVyHcn3pTZYFUrIqQKVVRgULpUiQV6s8gA3fmFIkSc1QCKkCagAhqnRALb4rRAgvRTkBcKaiCxJqyArJ3qjYFjZoANYcqyAOD+ABUMAtqR5aEQEJkVIFFzlPIhfgoWStxKCocJB9ax53L0no0Y0lGfcIZ6Tuz0JExlxgpdWEtpQlRUT3+gHqa8tG2G9LydN5HfWglF6iQ4jEb4N24TiwHFhGSlvPYD+IjvnFejxsrdOpTS19zn5NM1ZtR8+Am39QvJiREurbYS0tt1bSfwuDuMZ2zXAurhkysdkeTe9PXc7tuDCGPGUHxl77Y2udjuF4d/eVpbDsZ9sKSSQlYPB1A8n3Fa+ndTow6vy2TJqcf5RwLoSlLY1sYlWa6TIlttjsht0ILyG9gF6QScnb1rTROuymNqlvexM9+AhNxfsUpSry0UOvOqWnQvyKynBSvAJ2G496bdJ2TSr8a/kvGC49zL9XXhF0lpUyVrCNelau4JB0j2HG+9dDDqshB81oXLW+xkHZB39qa2QgRUnc0JgUOv5q2wA3V1STA5ScirJgQpJ9DUMChxJHY0qRIK7SJABuc1nkSV1UD1AEigAlqnxICW6bEAhPFOQFopqIOyfLUtgVd6psCxBqQCmSdquASVZIqrALazgVKIL0KJGe1WIDoqQ4ytKxlKtiM4q3CM4uMvDBScXtGhY/aB4LS4rDL781LfgJQ0gFKyP488ZwTmvE24PDIaT+E6CmnDbM500ifeXpUOFcF25IdAX8OBhSO+T8x3222rVZwqXZmh5NtsUktKP3NL170lDh9LJDMYypSCGWlNJOtaigDJ9d9xmrRkq4809IyTnKx/HthvTt4at9mSw+4IbwZDcpJcUXWlhOBoBykEDH3rz84uyx6+Lv8AD2Xf+fc1Tqhra7Alq67kvSVW+DF0zA8hWX31EyBkADIG3lAJr0deLZjVxi1+/wAkYZ+nKT0xr1IuQEeBOtSmZb4AQ7Dl+I2VE4AUFAYydh96fRNRtWyzsnw472ZaJaJcoAlpQjqWUuKAyWiM5yOxGOO/Fdu66EI72ZIfE9IQ9TMRYcwM218vQltpcaex/iZz39sfak1W+otsZKPHyZ9azqGauipwtVWApJyaqwGFvLCT+IAalC5bHrT1tDfmQnP0qzQl8hXcXIiwdCRS2Xi5GclIGTpG1Z5j14F7tZ5FiqlgeqQJFCAJap0SAlFOiBeninIC1NMRBKzhNTIDhNUQFqBUoAxhPFXAubTlecZHtVWt+CP3HNvYiSpceOsvR9awkkELH2OxFZ5zyK4OUtMfCNU5KKbLro+kyDGQ18OywShpk5GBnc78kncmrY1LS5ze2ylsu/FIlmK5MY+HbeLHiHd3GdKe5Hrxik9TzfytC4ru+xowsX123J6SArhaUQrdE+HdbYccIBeWtScaicKOD2TXCV0XLUl38jY1Kdcpx76Db5eha49vVGkgoStTHiRToKQE5yAkcb/fvmtFMOXdrZj5Ti9+GcLuPVF3hMtR7lJUphZkCQrGtStsE9kpAH3Nap4tVdL9TtF+3zKqbnPSNd1L03eY3RqnrbdUykt4kOJWoan8jKjqO5OcnGcVjqxMWu5Xxh39vP8A14Luc2uJ83tEa+2STa+qX0FmO/IxHccGoqOMDy84I71outc9l6K4ylqT0jUdQdYyrndoKLhDMK2x5Tbr7rZPirIO25SMAdhj70Y8otOOu7G5GNwfKMtxNjH6tYuzDbUFyGuR+I7KazghoAlRB7blIzzVeNsl8aRmilGW0z5je3kPS3lMIUmMtWW21qyW09hXahUq4JIpKTk+4kdHNBC7la9qsBSrjeqsk5CiDzUEaCGypWwJq+yrLxHcVtuaqyraKXoSh8wOKVKJCmCORW0jekyiTyBnmGU8ClaRZNg2lNV7FtlKRvUIsEtU6JAS3TogXJpqAtFMRBDhztUSYHk0LwAQ0M1KAPjoypI1JTkgalcD3NWlNQi5Mhs0T3TDCH4LUK8xJa5SiDpJT4WBnJ9RXJj1jH03JNFPUh8w+0xY9vnz0SVRpD8NAU06VlTYAI1KGO4zS8/K9WqMq38LOl0+EZy0u79jSJkpuHxLBSp2M+3+EHGCEkgHO553xXModlU002jp5OO1BuaWxbcOoOmnrezHktSbe4lsoBZZBCEq2KRj3/rVMrDvjZqxt77mOi2ca24/pCRc+k7a9DfuCbh4+62BIjlAJSNJ8pHbj2pU42y22itfPjwg1ox/U8u0OmGuXEDEOUp13yqAUhRPIxxsBTqnaoaofxIm+Gpf3vcV9eP2lgwI/Tk1xxgM4eDhVpWrsok7H8tq3YtubKDnlruc+fGL1A1/SL3TUy3RoFzvQkMRWAhEWQMNodO5WMfNg4xncdqzSutlP4lpfQ1Vwaq2kJOvXOoZCS5cpK1ssqC0xgMNBGMBSANu/PP5V2PyseHqVvZnU3vTQNBu86/3CFEloRrTELDjoO6wk5StXYqGwpCx3bLXgdG/0YyWuzNnCtggWiWkvthtZ8wbZCVrbAyQo5zjJ2AxTIUSrv3Jbil5MbuU4+FsycZuJcobjyOWnlIUDzjkfpW6mz1Y8kUtbg9CWbDwspQKu+wKRLdoecTnBqd9iXNIqkWlxkZVUEc0LHGjrxUF0x1arYp0pJGxqRU5GsjWpltGVgfegzykAXRqIlJ04qGQmzIXIsjOFd6zzHxEb6xnY1nbHop1VUnRCaESEt06JAS0lSuBmnRDYY1DkLxpbJpqK8kXGDJT8zSgPpVw5IGWhSVYUkiqtk7PJ5qUAWwmroA9oJATrBKcjIHOKLN8HpFX4HFxj2KWiGz0/DnMyVqw8XHifKEk7b7HavPUeq7tWwSi/PYmuMbO3Em0yBbpjchtI0o+ZOOUn5q7GXjRdDjFePA7Fs9OfY+hQ3Ey/wDmGZRfZKAEIyMNjb7ivKWWtSipefY7alB70/J8/wCpbfF0XN0Z0NEo8Ujtq4H3J39q03Zc7siKfbRd48KsOcku7OQ1KvEyDMkJgXeJGUtoqfQptxxOP4jxkbb47VS7Jrq3DumYq8G66CsWhFd3k3K+OJUzEZahjwUNRxhAOdz7nPf2rs9OpTipy9zn5kmpuL9gS/rYemK8Jba0oSE+TjP2rdkpOSSMlXZbGvQ0Bl9qaqTlqO3pSXw2To77kDA+9Y4XV4styfd+3k6VShOpqT1o2S+mL2qz3Zhlptxl5hPgPLWC2oE7q76SBvt6UTsjL/035GT46UI9zPQOl75bojF+Q22lYfbZEdS8urSs4+wOc79hUQs9OSZnsrbXF+TYX6PJas8waDqS2c5OwxzW/IkpUvic2lcb9M+Y9O3DwJj8V4hKXjk7Y83asGHbwen7m2+DmuxqosJ5wgNlpD7xw34iwMpG6sHscYxn196dlX6lxQqqt62wlhUUJCT8+cae+a1LwZ5bYkuUqLJcdRHJUlo6VK7Z9BSo2qUuKHKpxjykJW46FO5O4p2ijkaK36W0DTnapSEuRZOmuhBCdXFDIijKXCQ+dWSqkybNEUhE+pZJ1Ems89jFoFIVSS5FAEpqUQw6IzrIz606CIbNDbo7acZx960xQiUmaOFPisJAKUkimaQlqQeu7QXG8KQjNSCUjN3JyK5q8MJBqmh0GI/Dws4qyQ8MjtmmRQMYIa1YCdzncJGSKY4/MqNLWjw3g+UuFDPmWps48PsCT2GTWXOlxoelvZeuU4z5RGjHTV0u0H4pDcdEZ3zaUq8MO/TPasVLqkkrJOX8dh0sh+YpIqm9OyoTYdxHcSkbpYcClI9cjv8ArWXNwnz5VR+EtXepdn5EcGCZtwfafW+hgtglKFnSsk8+lYUtd2jc5txST7E2Rq1puMg35TnwrCCvyLICsdsDk5pyh6jXbZndsoJ6b+7FpvN2a8R2GiPFjhepLSY7epKRxnIOTjFd+vAtVXJnLlenI1UAXa99PuzRKgulpWFMSba2Tt9AKiGJFySbfcTPIcG00DdIdUNWqfJZvdpiphOhC3FQmPIFA7KKeK4/UMedF0Jp+xvx5K2t6Nl1VfY96t8WJ0nJcfUEr8VqEhRyjHB223pUZt/p2MVcovfgXssKtLkaSuKkyltJWkh0jwlJ+bVn5lEE5J4zimTqlSu/fZeF8Z92x3dJjMphTUiPhLyMOtr35G4rtY1LnUt+5y7pL1dx9j411D05Jtr3iMfix1rOlSc6kY3AV/eudk4zx/L8m2qx2LsjWTOoZ/S9qbYRMXLju6FBxCAlG6Dls58ysHBJ449KyuL15/kcpre9bLIfQHU9wsrNzTNhQ0yEBxTSypK0NnfdXA27U2WU5Li2KWuW9GW+DWAG0ICUoJGxzmunRUoQTXuItt5MuZZDXzYpwhtsOZnNNbdxQUcWRIuTSk8VDYKIkmyG15OmlSGxQofKd9hSJaGLYE5ikMsVYFQW2cpqUSMormMYp8RbQxbkKCdqfEpxJK3F8E1ZMskjwD/bNWJ7EeG4T5galBpFzbSvSrpEpjyw29Mu4w2XiUtOSG0LI/lKgDVpvhW5fQhvufeQiFbIwjQYjLbLYxpQgcV4/Iz7G9pj1Ex1+dh3RExtJWhyO6lGhKcJUds4A3OxrR0zKtV6b77XYmzajozU12Q9FdiF18t5WGwtRC0oJ8o9RtXpcei78s9/rezO+LmmdRIdpVfC1BfkRIq44UsylEqKwd9IV2AIGfeuBVmdQ6XQ55ceTb158I1woV71D2AktpiTWpDR8SNJyELSOCOR9DjNaMmj1oRy4LSa7r/ZaubjJ1yF0a0OXd9ltLSyNSlurxkpTnYY960dMrim7JexizbuPwoaG1QlzY9sjgOLWtPjOc6Mk4B+pGPzrr5OdwS/c5+NVKyXJjnp/Sw/NZe8qH2wSMbhScA4/MflVb01JSiMviZyE1FZ6hdTLkNQWGUqLhcRkujfCUj19c8Vg6xdVB1ynFtr7DsFScXpmojWBDyos+FYnYjPmU660pQ8b0JTnOD9O9c+jJd9nxS7fubbpzjDS8jN9nFxjR3dCil9AUlJzjJGQfz4rXlOu6nnW/Bjx+UJ6l7lfVKQi9yhwCQQO2MCulhNOhMXav7jPmN6uDtyvjDVncX4aFCMlYOlCnDkkZ44rlZvHIuUY9zfjS9Gttm56XsESDZJc26yWTMKj+DlOlIAJSjUeCdyawfnFiycPP0JuhG3XEsm3C4S0mI1NdMV5vU6gDUQE4PJ4TuAcUX4dXqwml59i+NFSqbm+5nbitBJ0pGfWvQxSUUkcp/qexHIbWtWE7VDRdMqTEVneq6DkVvshIO9VZKYsk6RnelSGIVyFDJpEy6QGpWaUX0c5qCTyalAEtLxuKbEgaRHWjjxDT4sW0Oo64ARlRyaahb2WB2MVYQNqlBph0SPHfIynNMRRtoaN2JpzdOwNWTKq1odWPp91EppbDLjgQckoG4ztkHjI5Hvis+bJehKO9dhldjlNdg1PULE0Fmd1B8OUeUhmPoWojY68539uK+e3WZEe0Ku/wC+zrqlNbXcUXTqiywGGIcRz4t1b6FOSpATqUAoE/ptTcGnKncrmta9kMVUV2mW2mUi62Rwxo9uz47jbbrsfWoAHAJVnJ2717vDk7lycnv9zl5T9Kel4MLe2LqxIXFXavEKD5XWmVu6x66/9K1WX0x7TXf6rf8A2RW565R7DWCu+myPi4W8JiIKEpXkAsnsrA9PSlSyYW/21HW/sXScXyY76PmiM3LC1BxSFEJUnjtx7Vorw3VWonJy7XK3Yq6c0/8AHTRYKiyJRWB6YScj6Zrj9T1G3SOpgpunbNb1hZ5JbmPW5KzJDviNIQCdQPzJOPXNdGjJ/txfyK+nCzlCUtHymfdXTLWEDxZuSlTjjekNHuADvn3NRfdZk/BFDa414q+F8mb7o7rJy5xTaLkyt1bLWoqS6AVJRvnB5NeSl0u+nKc6/Hlo1TtqnWg/qCc5CtLlzsmtSkBLjGuOoHUVDlFen3CeI/h4/Q5lcZetx3sFcVduo+nlvXJSmp8lopCg34ecHA2+1MpipYvCDLWP07lyQFb+lnodj6XywWn3JDkx7V/AgAAD9f1rnUQk7UkPvsioSbGMyDJuVwjsxnVhAd0FAGoN+qx2Bxtk1lzeFmS2lrR0sOh04qlrex5e7XFt9s/+Od0vqR4BClFQWkEFWT2Vgf6U6qU7JwTezPbJVxfYxE/8Mmu74RxV8T2I5E7w1HAqjY1RBF3VW9LciygBP3BSs0tyLqAuefUqlSZdR0BuKPekyLFNKJIqQOk0IC5FMRAQ3nGQCacgYfFiPOkbHH0psUUbQ+hWpZwVZxToxESmP4cJDZGKaoMS5bHsRsDG9TwkUYweEl2J8KxNejNk6leFyfvWDK6bDJmpyfj7D6sl1wceIim9PW2I38Y9AkXAtnKmQsnxD6q74HNYc7pzhT/Yen9zRjXKc9TejOzLOq+zpH7vszkZtLYPhqa0gY/zHH6Vz8ajKUdS7s15KhBrT2jmDPY6MgqciqEybMOlTDijoa0nb77/AKVpxL7p2uEexE6YurnPuP7XcXvhZMm/zWy/ltxEVlhRGggggY/3tXSz8XJjHnWuTF48YctPshI91tf7g88xZnG40EbltbKdITx6bml4eFfatSen+xe6yqL+BdiYDr8W1F9xsjO3iYwC4cnOBwBvXobJOuEYe5wbFGdjZMZ9HT4tNxY0uSXo63HELOQCVYH6dq851GP9zZ2MNv0+LNn051WzcI6jc7kyZ+dakjCEtJ7AY/M1GJNLakyuXVJ6cVsxf7QYUe3dWiSlxGiayl9eBsFEb/nsa62FfHk9+widcuC0VdI3iHarit2alDTT6NJeWkam8cH2B/tWvIhFr1NaFJSa0mbe7zbc9AWlM2P4jiAtoFwAqwQRgc1zcmUZVtDsPcbkaD4dtPT9rXwSjf3KvNSOnt90Nz4PYLM+LXGQuMou+CSEtEZCvROM53J57YpOfmwxJJb02Vxaee3OO0Zi5R+pLc4b0xBBgvNpU8hl3KRt8wVzkjY49K51s3bNT19ju40666uEZdvkybZIfkNJTPiuMsMuLdYjkZ8Mr+Y61HJ5P51uxab1NPh2+phyJ47i/i+wPcWWVglOBvxXaUJa7nG9+3gytxjICiRVZQY+AhkIwris8kxyAlmlMuUq3pUgKV0pklVVAigCU80IAhkAnFNitkD+3Q86SU10acZy8i2maCIlLSR5RXQhiIW4sOS9WiOPFB6YQw9vnNO9COiHWM40oDFJlULcC969MxkkrxgDc1msgo+SvpMBd62t7bSi26zr5ALgFY52w15JVD2Kh+0iWNWqEwUjgoe1fesrvfyL/l/mI+oOtU3SOYphxlKWoErWMEH1CqT6yhLlGPcbCEvDZnlyH2FpeRJCVIBAKHSrApyzN932Gem0aOdY7jarLGkty47jstvxH4Z060DnkKOc89qpHqygnFtfsa4dNybIucYPXzF1uvMYsKhvZjoWQcJOpsq9ccg+9aqcqmztL4Wcmymae13BbBal3q9vwBPjsjzFLr26Dg8CuXNNWNGuMtRR9Wtf7N2YMUPfFQG2tSFyC3JU54iUebAJA05P6VMpR4cVvf7ImLfPb8Gf/aYpLtxVJbWxLSzjJaTjG2wz3xsKnFsjTPlLuPvSshqJnLXb79JWVRLO3KGPN4pSRg/fany6xCT0or/IT6NkJJta/lCGY3Ih39TTzXw7rT2nwgrIb9hmskmptzitIrGDrmoy9j6ujqlq62dizvyn4Kk4SJqEZQnHGe9LqsnB9kdC2iqxN72K7pcZtiuLVldlped8MPNymXNSXkEe/wAqtjVOpSV1aeu6MmLL0m4/M2EX9otsg2hpl2KptDbQQgOvJ0kD19a4mKr1Ynv39ibIpMxD3WtrdUVB9YUs+VIbVX0KrNojCKbe/wBjA61stE1UoBQYeSn+dYAzXSran/8AF6I4IoeaSvc81eVMWW0APwG152pEsaDLIWybTsSnasVmF8idiaZDUznP51zLqXAnYvXtWNkldVAigCRQATHUELCj60+t6eyDTW+e0UhPG1dvHyIa0Qxo0+hQ2NdCNkWiAhCwe9NRBehWDzTEBehzfmhoDmVHZmp0yCop4wFYzWe3HjYu4C9zpazOJ0/D6fdKiDWJ9Lx37FuTK09IWdJylL3/AOhqn9Io+v3DZyvpG3pSfCcfSTxkhVR/Sal4ZGxPL6RKVnw5Cjn1QKx2dKftIlMbh7qDwEsqdhrSgaQVRgSR7mkf0eW9rRo/OXpaUnoEet90kt+EtyI2jj8OMAaaumW/8jPsHHRYcSNMjQR3Izmm/wBIbXaQbO09IS0o8JVzBZ/kwrH5ZxULo0/eS+wbOUdFOIUlaJ6NSSCB4W2fzol0WT8SX2JUmntGohqlRQjVBtzykjdXiuo1fYUh/h/56/yb49Wy1r4/H0QsuXT7dzkPyZKm23HTnS0DpTt771sr6PGMOPuY7bp2yc5PuxT/AMISm0qSzOSR/Lgilvo814kL5fQGjWe72+cmXHCVuI2Grcce9ZbelXNa0CloGl2i7TJBelIys7bcAegFUr6ZdBaSLOW/Iba7E42+2442fKc+Y53roYvT5KSlJFNmsKvL9K767EFS1D1qrYFC1p9aW5JEgr0ptCTvSJ3RigEV1mpdBSAK5GVepIlIQuHJrlSJK6qSeoAkUAWoqyILkOKB2OKdGTQBrMp4YAWa1QskvcBoxKeAHmrbXdP5kBzMt4jkVsjbLZDDWpDhAJIrRGyWyAhD6/UU5NsC8OKqwHeo+tQBIUd6nSAkKOkGo0SeyTRpAeUcCj3AhKiaAJJNToD2TQBBJoIPAmgDlSyDip0BwpZSdsUAVqdVntUAUl9ft+VUlJgDuynQeRWadkkAC9LeBPmrPO2egFr018kjVWKy6fzLIBeecUN1Gsk7JPyWA1+bmsreyClVUZJXVQPUAf/Z'
    },
     
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="mafia-theme">
      {/* Bullet hole effect */}
      <AnimatePresence>
        {showBulletHole && (
          <motion.div
            className="bullet-hole"
            initial={{ opacity: 1, scale: 1.5 }}
            animate={{ opacity: 0, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            style={{
              left: `${bulletHolePosition.x}px`,
              top: `${bulletHolePosition.y}px`
            }}
          />
        )}
      </AnimatePresence>

      {/* Blood splatter decoration */}
      <div className="blood-splatter blood-1"></div>
      <div className="blood-splatter blood-2"></div>
      <div className="blood-splatter blood-3"></div>

      {/* Navbar */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
        className="mafia-navbar"
      >
        <div className="container">
          <motion.a 
            href="#"
            whileHover={{ scale: 1.05 }}
            className="mafia-logo"
          >
            <span className="logo-icon">G</span>erald Bubog
          </motion.a>
          
          {/* Mobile menu button */}
          <button 
            className="mobile-menu-button"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
          
          <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            <a 
              href="#home" 
              className={`mafia-nav-link ${activeSection === 'home' ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#about" 
              className={`mafia-nav-link ${activeSection === 'about' ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#skills" 
              className={`mafia-nav-link ${activeSection === 'skills' ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </a>
            <a 
              href="#projects" 
              className={`mafia-nav-link ${activeSection === 'projects' ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>
            <a 
              href="#projects" 
              className={`mafia-nav-link ${activeSection === 'projects' ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </a>
            
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="mafia-contact-btn"
              onClick={() => {
                setIsMenuOpen(false);
                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact Me
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Main Content */}
      <main className="mafia-main">
        {/* Header Section */}
        <header id="home" className="mafia-header">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="header-content"
            >
              <h1 className="mafia-title">
                Gerald <span className="text-red">Bubog</span>
              </h1>
              <h2 className="mafia-subtitle">
                Full Stack <span className="text-red">Developer</span>
              </h2>
              <p className="mafia-intro">
                I build digital experiences you can't refuse. 
                Specializing in responsive, performant web applications with intuitive user interfaces.
              </p>
              
              <div className="header-cta">
                <motion.a 
                  href="#projects"
                  className="cta-btn primary"
                  whileHover={{ 
                    y: -3,
                    boxShadow: '0 5px 15px rgba(139, 0, 0, 0.4)'
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  View My Work
                </motion.a>
                <motion.a 
                  href="#contact"
                  className="cta-btn secondary"
                  whileHover={{ 
                    y: -3,
                    boxShadow: '0 5px 15px rgba(139, 0, 0, 0.4)'
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  Contact Me
                </motion.a>
              </div>
              
              <div className="social-icons">
                {[
                  { icon: <FiGithub size={24} />, url: 'https://github.com' },
                  { icon: <FiLinkedin size={24} />, url: 'https://linkedin.com' },
                  { icon: <FiMail size={24} />, url: 'mailto:gerald@example.com' },
                  { icon: <FiTwitter size={24} />, url: 'https://twitter.com' }
                ].map((social, i) => (
                  <motion.a 
                    key={i}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ 
                      y: -5,
                      scale: 1.2,
                    }}
                    transition={{ duration: 0.3 }}
                    className="social-icon"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </header>

        {/* About Section */}
        <section id="about" className="mafia-section">
          <div className="container">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="section-title">
                <span className="section-number">01.</span> About Me
                <span className="title-decoration"></span>
              </h2>
              
              <div className="about-content">
                <div className="about-text">
                  <p>
                    I'm Gerald Bubog, a passionate full-stack developer with 5+ years of experience building modern web applications. 
                    I specialize in creating responsive, accessible, and performant digital experiences.
                  </p>
                  <p>
                    My expertise spans the entire development stack, from crafting pixel-perfect UIs to designing robust backend systems. 
                    I'm proficient in JavaScript/TypeScript, React, Node.js, and various database technologies.
                  </p>
                  <p>
                    I believe in writing clean, maintainable code and staying updated with the latest industry trends and best practices. 
                    My approach combines technical excellence with user-centered design principles.
                  </p>
                  
                  <div className="mafia-facts">
                    <div className="fact-box">
                      <h3>Education</h3>
                      <p>Bachelor's in Computer Science<br />
                      University of Technology, 2020</p>
                    </div>
                    <div className="fact-box">
                      <h3>Experience</h3>
                      <p>Senior Full Stack Developer<br />
                      Tech Solutions Inc., 2021-Present</p>
                    </div>
                    <div className="fact-box">
                      <h3>Certifications</h3>
                      <p>React Certified Developer<br />
                      Advanced JavaScript Concepts</p>
                    </div>
                    <div className="fact-box">
                      <h3>Methodologies</h3>
                      <p>Agile Development<br />
                      Test-Driven Development</p>
                    </div>
                  </div>
                </div>
                
                <motion.div 
                  whileHover={{ scale: 1.03 }}
                  className="mafia-profile"
                >
                  <div className="profile-image-container">
                    <img 
                      src="/p/1.jpg" 
                      alt="Gerald Bubog"
                      className="profile-image"
                      loading="lazy"
                    />
                    <div className="profile-decoration"></div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mafia-section">
          <div className="container">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="section-title">
                <span className="section-number">02.</span> My Skills
                <span className="title-decoration"></span>
              </h2>
              
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="mafia-skill-card"
                    whileHover={{ 
                      y: -10,
                      boxShadow: '0 10px 25px -5px rgba(200, 0, 0, 0.4)'
                    }}
                  >
                    <div className="skill-icon">{skill.icon}</div>
                    <h3 className="skill-name">{skill.name}</h3>
                    <div className="skill-bar-container">
                      <motion.div 
                        className="skill-bar"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                    <span className="skill-percent">{skill.level}%</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mafia-section">
          <div className="container">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="section-title">
                <span className="section-number">03.</span> Featured Projects
                <span className="title-decoration"></span>
              </h2>
              
              <div className="projects-grid">
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="mafia-project-card"
                    whileHover={{
                      y: -10,
                      boxShadow: '0 20px 25px -5px rgba(200, 0, 0, 0.4), 0 10px 10px -5px rgba(200, 0, 0, 0.2)'
                    }}
                  >
                    <div className="project-image-container">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="project-image"
                        loading="lazy"
                      />
                    </div>
                    <div className="project-content">
                      <h3 className="project-title">{project.title}</h3>
                      <p className="project-description">{project.description}</p>
                      <div className="project-tags">
                        {project.tags.map((tag, i) => (
                          <motion.span 
                            key={i}
                            className="project-tag"
                            whileHover={{ scale: 1.1 }}
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>
                      <motion.a 
                        href={project.link} 
                        className="project-link"
                        whileHover={{ 
                          scale: 1.05,
                          textShadow: '0 0 5px rgba(200, 0, 0, 0.8)'
                        }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Project <FiExternalLink className="link-arrow" />
                      </motion.a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mafia-section">
          <div className="container">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="section-title">
                <span className="section-number">04.</span> Get In Touch
                <span className="title-decoration"></span>
              </h2>
              
              <div className="contact-content">
                <div className="contact-info">
                  <h3 className="contact-subtitle">Let's work together</h3>
                  <p className="contact-text">
                    I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
                    I'll get back to you as soon as possible!
                  </p>
                  
                  <div className="contact-methods">
                    <div className="contact-method">
                      <FiMail className="contact-icon" />
                      <div>
                        <h4>Email</h4>
                        <a href="mailto:gerald@example.com">gerald@example.com</a>
                      </div>
                    </div>
                    <div className="contact-method">
                      <FiLinkedin className="contact-icon" />
                      <div>
                        <h4>LinkedIn</h4>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">linkedin.com/in/geraldbubog</a>
                      </div>
                    </div>
                    <div className="contact-method">
                      <FiGithub className="contact-icon" />
                      <div>
                        <h4>GitHub</h4>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer">github.com/geraldbubog</a>
                      </div>
                    </div>
                  </div>
                </div>
                
                <form className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input type="text" id="subject" name="subject" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows="5" required></textarea>
                  </div>
                  <motion.button 
                    type="submit"
                    className="contact-submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mafia-footer">
        <div className="container">
          <motion.a 
            href="#"
            whileHover={{ scale: 1.05 }}
            className="footer-logo"
          >
            Gerald Bubog
          </motion.a>
          <p className="footer-text">
            Let's create something amazing together. Get in touch today!
          </p>
          <div className="footer-social">
            {[
              { icon: <FiGithub />, url: 'https://github.com' },
              { icon: <FiLinkedin />, url: 'https://linkedin.com' },
              { icon: <FiMail />, url: 'mailto:gerald@example.com' },
              { icon: <FiTwitter />, url: 'https://twitter.com' }
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                className="social-icon"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
          <p className="footer-copyright">
            © {new Date().getFullYear()} Gerald Bubog. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;