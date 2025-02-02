import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Image from "next/image";

export default function Page() {
    return (
        <div>
            <Header/>
            <div className="bg-GreyBG flex items-center justify-center min-h-screen">
                <div className="bg-white min-h-lvh">
                    <div className="flex items-start">
                        <p>В 1929 году был открыт Новосибирский машиностроительный техникум.
                            В  1937 году учебное заведение переходит под управление Наркома оборонной  промышленности,
                            техникум переименовывают в авиационный.
                            С 1938 по 1940 год ведётся строительство учебного корпуса  учреждения, в котором принимают активное участие преподаватели и  учащиеся техникума.</p>
                        <Image
                            src="/NATKOLD.jpg"
                            alt="Old NATK"
                            layout="relative"
                            height={100}
                            width={100}
                            className="object-cover"
                        />
                    </div>
                    <p>
                        В 1941 году из Москвы в Новосибирск эвакуируют ЦАГИ, его располагают в здании авиационного
                        техникума, после чего учебное заведение на непродолжительное время закрывается.
                        Но уже в декабре 1941 года решением ГК обороны техникум размещают в одном корпусе вместе с
                        Московским авиационным технологическим институтом, занятия возобновляются.
                        В 1945 году на учебное заведение возлагается новая обязанность— техникум начинает проводить
                        методические работы с учителями техникумов Новосибирской области.
                    </p>
                    <div className="flex items-start max-w-fit">
                        <Image
                            src="/NATK.jpg"
                            alt="NATK now"
                            layout="relative"
                            width={100}
                            height={100}
                            className="object-cover"
                        />
                        <p>В 1964 году руководителем авиационного техникума становится  В.Н.Тихомиров, который формирует
                            долгосрочную образовательную  политику, направленную на совершенствование
                            деятельности учреждения.
                            С 1983 года в техникуме начинает работать Музей авиации и космонавтики имени Ю.В.Кондратюка.
                            В 1991 году техникум получает статус колледжа, в этом же году учреждение было включено в состав НАПО им. В.П.Чкалова на правах юридического лица.</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}