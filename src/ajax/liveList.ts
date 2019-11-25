import { ajax, AjaxResponse } from 'rxjs/ajax';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { API_KEY } from '../const/const';
import { buildQuery } from '../util/buildQuery';

const url = `https://apis.pooq.co.kr/cf/band/pooqlive2/pooqLive2`;

const headers = {
    // ':authority': 'apis.pooq.co.kr',
    // :method: GET
    // :path: /cf/band/pooqlive2/pooqLive2?contenttype=channel&WeekDay=all&uitype=LN2&uiparent=GN3-LN2&uirank=8&broadcastid=11786&offset=0&limit=20&apikey=E5F3E0D30947AA5440556471321BB6D9&credential=none&device=pc&drm=wm&partner=pooq&pooqzone=none&region=kor&targetage=auto
    // :scheme: https
    'accept': 'application/json',
    'accept-encoding': 'gzip, deflate, br',
    'accept-language': 'ko,en-US;q=0.9,en;q=0.8,ja;q=0.7,th;q=0.6',
    'origin': 'https://www.wavve.com',
    'referer': 'https://www.wavve.com/live/index.html',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'cross-site',
};

const queries = {
    contenttype: 'channel',
    WeekDay: 'all',
    uitype: 'LN2',
    uiparent: 'GN3 - LN2',
    uirank: 8,
    broadcastid: 11786,
    offset: 0,
    limit: 20,
    apikey: API_KEY,
    credential: 'none',
    device: 'pc',
    drm: 'wm',
    partner: 'pooq',
    pooqzone: 'none',
    region: 'kor',
    targetage: 'auto',
}

export default function liveList(): Observable<JSON> {
    return ajax({
        url: `${url}${buildQuery(queries)}`,
        headers,
    })
        .pipe(map((response: AjaxResponse): JSON => response.response));
}