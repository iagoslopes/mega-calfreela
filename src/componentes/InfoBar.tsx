// desestruturação {}
// title sempre será um texto
import './InfoBar.css';

type InforBarProps = {
  title: string;
};

function InfoBar({ title }: InforBarProps) {
  // const {title} = props; Também funciona com props: Inforbarprops

  return (
    <section className="infobar">
      {title}
    </section>
  );
}

export default InfoBar;
