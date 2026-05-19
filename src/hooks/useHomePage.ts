import { useQuery } from "@tanstack/react-query"
import { fetchHomePageContent } from "@/lib/cms"
import { FALLBACK_HOME_CONTENT } from "@/lib/cms-fallbacks"
import type { HomePageContent } from "@/types/cms"

export function useHomePage() {
  return useQuery<HomePageContent, Error>({
    queryKey: ["cms", "home"],
    queryFn: fetchHomePageContent,
    placeholderData: FALLBACK_HOME_CONTENT,
    staleTime: 5 * 60 * 1000,
    retry: 2,
  })
}
