import { QuestFullInfo } from '../../types/quest';

type QuestPictureProps = {
  quest: QuestFullInfo;
}

export default function QuestPicture ({quest}: QuestPictureProps): JSX.Element {
  return (
    <picture>
      <source type="image/webp" srcSet={`${quest.coverImgWebp}, ${quest.coverImgWebp} 2x`} /><img src={quest.previewImg} srcSet={`${quest.coverImg} 2x`} width="1366" height="768" alt="" />
    </picture>
  );
}

