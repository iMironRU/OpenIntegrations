import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Простота и гибкость',
    Svg: require('@site/static/img/tools.svg').default,
    description: (
      <>
		Пакет содержит множество методов для работы с различными полпулярными API. Эти методы не треубют глубокого погружения в тонкости работы для использования, но и не ограничивают вас в возможности их дополнения и редактирования.
      </>
    ),
  },
  {
    title: 'Лёгкость внедрения',
    Svg: require('@site/static/img/delivery.svg').default,
    description: (
      <>
        ОПИ состоит только лишь из общих модулей, а значить его легко интегрировать в любой проект: в виде bsl для EDT, как расширение или даже просто скопировав руками содержимое в заранее созданные модули в Конфигураторе
      </>
    ),
  },
  {
    title: 'Подробная документация',
    Svg: require('@site/static/img/books.svg').default,
    description: (
      <>
		У нас есть подробная документация, а код структурирован и дополнен комментариями. Если же у вас все таки возникнут дополнительные вопросы, то вы всегда можете задать их в Issues на Github
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        <hr/>
        <section className={styles.container}>
          <span className={styles.looptext}>
            <a  className={styles.ico} href="/docs/Telegram/"> <img src={require('../../../static/img/APIs/Telegram.png').default} width='32px' /></a>
            <a  className={styles.ico} href="/docs/VK/"><img src={require('../../../static/img/APIs/VK.png').default} width='32px'/> </a>
            <a  className={styles.ico} href="/docs/Viber/"><img src={require('../../../static/img/APIs/Viber.png').default} width='32px'/> </a>
            <a  className={styles.ico} href="/docs/Twitter/"><img src={require('../../../static/img/APIs/Twitter.png').default} width='32px'/> </a>
            <a  className={styles.ico} href="/docs/Notion/"><img src={require('../../../static/img/APIs/Notion.png').default} width='32px'/> </a>
            <a  className={styles.ico} href="/docs/Yandex_Disk/"><img src={require('../../../static/img/APIs/YandexDisk.png').default} width='32px'/> </a>
            <a  className={styles.ico} href="/docs/Google_Calendar/"><img src={require('../../../static/img/APIs/GoogleCalendar.png').default} width='32px'/> </a>
            <a  className={styles.ico} href="/docs/Telegram/"> <img src={require('../../../static/img/APIs/Telegram.png').default} width='32px' /></a>
          </span>
          <span className={styles.looptext}>
            <a  className={styles.ico} href="/docs/Telegram/"> <img src={require('../../../static/img/APIs/Telegram.png').default} width='32px' /></a>
            <a  className={styles.ico} href="/docs/VK/"><img src={require('../../../static/img/APIs/VK.png').default} width='32px'/> </a>
            <a  className={styles.ico} href="/docs/Viber/"><img src={require('../../../static/img/APIs/Viber.png').default} width='32px'/> </a>
            <a  className={styles.ico} href="/docs/Twitter/"><img src={require('../../../static/img/APIs/Twitter.png').default} width='32px'/> </a>
            <a  className={styles.ico} href="/docs/Notion/"><img src={require('../../../static/img/APIs/Notion.png').default} width='32px'/> </a>
            <a  className={styles.ico} href="/docs/Yandex_Disk/"><img src={require('../../../static/img/APIs/YandexDisk.png').default} width='32px'/> </a>
            <a  className={styles.ico} href="/docs/Google_Calendar/"><img src={require('../../../static/img/APIs/GoogleCalendar.png').default} width='32px'/> </a>
            <a  className={styles.ico} href="/docs/Telegram/"> <img src={require('../../../static/img/APIs/Telegram.png').default} width='32px' /></a>
          </span>
        </section>

      </div>
    </section>
  );
}
