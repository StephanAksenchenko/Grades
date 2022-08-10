import css from "./Tags.module.scss";

type TagsProps = {
  tags: string[];
};

const Tags = ({ tags }: TagsProps) => {
  return (
    <ul className={css.list}>
      {tags.map((t, i) => (
        <li className={css.item} key={i}>
          {t}
        </li>
      ))}
    </ul>
  );
};

export default Tags;
