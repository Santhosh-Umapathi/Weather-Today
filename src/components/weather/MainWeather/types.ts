export type TProps = {
  name?: string;
  canGoToSearch?: boolean;
  id: number;
};

export type TController = Pick<TProps, 'id'>;
