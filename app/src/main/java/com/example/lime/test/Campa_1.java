package com.example.lime.test;

import android.app.Activity;
import android.app.ActivityGroup;
import android.content.Intent;
import android.os.Bundle;
import android.support.v4.content.ContextCompat;
import android.view.View;
import android.widget.AdapterView;
import android.widget.Button;
import android.widget.ListView;

/**
 * Created by lime on 2016-05-23.
 */
public class Campa_1 extends Activity {

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.campa_1_layout);

        ListView listview ;
        Campa_listAdapter adapter;

        // Adapter 생성
        adapter = new Campa_listAdapter() ;

        // 리스트뷰 참조 및 Adapter달기
        listview = (ListView) findViewById(R.id.campalist);
        listview.setAdapter(adapter);

        // 첫 번째 아이템 추가.
        adapter.addItem(ContextCompat.getDrawable(this, R.drawable.nosmoke22),
                "금연 캠페인", "담배를 끊는것은 새해 목표뿐") ;
        // 두 번째 아이템 추가.
        adapter.addItem(ContextCompat.getDrawable(this, R.drawable.human11),
                "뇌건강 캠페인", "안녕하세요?오늘은 뇌를 젊게") ;
        // 세 번째 아이템 추가.
        adapter.addItem(ContextCompat.getDrawable(this, R.drawable.nosmoke33),
                "캠페인", "Assignment Ind Black") ;

        listview.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView parent, View v, int position, long id) {
                // TODO : item click

                if(position==0) {
                    Intent pageAppSelectIntent = new Intent(Campa_1.this, Campa_read.class);
                    v = Tab_campaign.campaignHGroup.getLocalActivityManager().startActivity("Campa_read",
                            pageAppSelectIntent.addFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP)).getDecorView();

                    Tab_campaign.campaignHGroup.replaceView(v);
                }
                else if(position==1) {
                    Intent pageAppSelectIntent = new Intent(Campa_1.this, Campa_read1.class);
                    v = Tab_campaign.campaignHGroup.getLocalActivityManager().startActivity("Campa_read1",
                            pageAppSelectIntent.addFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP)).getDecorView();

                    Tab_campaign.campaignHGroup.replaceView(v);
                }
            }
        }) ;




    }
}
