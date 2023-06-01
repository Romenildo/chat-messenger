import { useParams } from "next/navigation";
import { useMemo } from "react";


//armazenar na memoria se a navvbar está aberta ou não
const useConversation = () => {
  const params = useParams();

  const conversationId = useMemo(() => {
    if (!params?.conversationId) {
      return '';
    }

    return params.conversationId as string;
  }, [params?.conversationId]);

  const isOpen = useMemo(() => !!conversationId, [conversationId]);

  return useMemo(() => ({
    isOpen,
    conversationId
  }), [isOpen, conversationId]);
};

export default useConversation;