export const dynamic = 'force-dynamic' // defaults to auto

export async function GET(request: Request) {

    return Response.json({
        
        count: 100
    });
}

export async function POST(request: Request) {

    return Response.json({
        method: 'POST',
        count: 100
    });
}