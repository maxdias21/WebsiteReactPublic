import {formatDistanceToNow, parseISO} from "date-fns";
import {ptBR} from "date-fns/locale";

export function formatDistanceDateToNow(date) {
    if(!date) {
        return undefined;
    }
    // Converte a data string no formato ISO para um objeto Date
    const dateString = parseISO(date);
    return formatDistanceToNow(dateString, {
        // true - adiciona atrás/meses/dias | 5 anos ATRÁS
        addSuffix: true,
        locale: ptBR,
    });
}